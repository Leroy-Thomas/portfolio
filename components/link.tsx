export interface ButtonProps {
  href: string; // Vérifiez que c'est bien 'href' et non 'to'
  children: preact.ComponentChildren;
  className?: string;
}

export function Link({ href, children, className }: ButtonProps) {
  return (
    <a href={href} className={className} target="_blank">
      {children}
    </a>
  );
}
