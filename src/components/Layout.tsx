import { ReactNode } from 'react';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { LogOut, User, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function Layout({ children, title, className }: LayoutProps) {
  const { user, logout } = useAuthStore();

  if (!user) return null;

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'technician': return 'bg-primary text-primary-foreground';
      case 'admin': return 'bg-success text-success-foreground';
      case 'auditor': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-clinical">
      {/* Clinical Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded bg-gradient-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">L</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold">LIMS Healthcare</h1>
                {title && <p className="text-sm text-muted-foreground">{title}</p>}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.department}</p>
              </div>
              <div className={cn(
                "px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1",
                getRoleColor(user.role)
              )}>
                <User className="h-3 w-3" />
                <span className="capitalize">{user.role}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={logout}
                className="text-destructive hover:text-destructive-foreground hover:bg-destructive/90"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={cn("container mx-auto px-4 py-8", className)}>
        {children}
      </main>
    </div>
  );
}