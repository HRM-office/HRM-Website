interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export function SimpleLoadingSpinner({
  size = 16,
  className = ""
}: LoadingSpinnerProps = {}) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`border-4 border-primary/20 border-t-primary rounded-full animate-spin ${className}`}
        style={{ width: size, height: size }}
      />
    </div>
  );
}

// Global loading spinner for page transitions
export function GlobalLoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <SimpleLoadingSpinner size={48} />
    </div>
  );
}