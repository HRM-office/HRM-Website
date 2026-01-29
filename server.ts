import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import nodemailer from 'nodemailer'
 
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Contact API handler
async function handleContactAPI(req: any, res: any) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }

  try {
    let body = ''
    req.on('data', (chunk: any) => {
      body += chunk.toString()
    })

    req.on('end', async () => {
      try {
        const { name, email, subject, message } = JSON.parse(body)

        // Validate required fields
        if (!name || !email || !message) {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Name, email, and message are required' }))
          return
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        })

        // Email options
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_TO,
          replyTo: email,
          subject: 'New Contact Message - HRM Office Website',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background-color: #263C85; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
                <h2 style="margin: 0; font-size: 24px;">HRM Office - New Contact Message</h2>
              </div>
              <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #263C85; margin-bottom: 8px;">Contact Details:</h3>
                  <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                  <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                  ${subject ? `<p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>` : ''}
                </div>
                <div style="border-top: 1px solid #eee; padding-top: 20px;">
                  <h3 style="color: #263C85; margin-bottom: 10px;">Message:</h3>
                  <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #2ABEC5;">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>
            </div>
          `
        }

        // Send email
        await transporter.sendMail(mailOptions)

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Message sent successfully!' }))

      } catch (error) {
        console.error('Email sending error:', error)
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Failed to send message. Please try again.' }))
      }
    })

  } catch (error) {
    console.error('Contact API error:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Internal server error' }))
  }
}
 
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    
    // Handle API routes manually
    if (req.url === '/api/contact') {
      handleContactAPI(req, res)
      return
    }
    
    // Handle mentorship API if it exists
    if (req.url === '/api/mentorship') {
      // You can add mentorship handler here if needed
      handleContactAPI(req, res) // For now, use same handler
      return
    }
    
    // Handle all other requests with Next.js
    handle(req, res, parsedUrl)
  }).listen(port)
 
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})