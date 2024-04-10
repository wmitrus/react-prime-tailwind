import { Component, ErrorInfo, ReactNode } from 'react';
// import logger from '@/lib/PinoLogger';

interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: JSX.Element | string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // logger.error({ error, errorInfo });
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      const { fallback } = this.props;
      return fallback;
    }

    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
