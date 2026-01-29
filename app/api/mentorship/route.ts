import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, agree } = await request.json()

    if (!name || !email || !agree) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log the application
    console.log('New mentorship application:', {
      name,
      email,
      phone,
      message,
      agree,
      timestamp: new Date().toISOString()
    })

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
      replyTo: email, // This allows replies to go to the applicant's email
      subject: 'New HR Mentorship Application - HRM Office Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #263C85; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="margin: 0; font-size: 24px;">HRM Office - New Mentorship Application</h2>
          </div>

          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #263C85; margin-bottom: 8px;">Applicant Details:</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email} <em>(Reply to this email will go to the applicant)</em></p>
              ${phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
              <p style="margin: 5px 0;"><strong>Agreement:</strong> ${agree ? 'Yes, applicant has agreed to participate' : 'No'}</p>
            </div>

            ${message ? `
            <div style="border-top: 1px solid #eee; padding-top: 20px;">
              <h3 style="color: #263C85; margin-bottom: 10px;">Additional Information:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #2ABEC5;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #666; font-size: 14px;">
                This application was submitted from the HRM Office mentorship form
              </p>
            </div>
          </div>
        </div>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Application submitted successfully' })
  } catch (error) {
    console.error('Error processing mentorship application:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}