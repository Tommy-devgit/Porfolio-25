import { type LucideProps } from "lucide-react";

export function TelegramIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9.999 15.168l-.39 5.489c.557 0 .799-.24 1.09-.529l2.611-2.489 5.408 3.951c.991.545 1.692.258 1.944-.915l3.522-16.479c.36-1.656-.6-2.302-1.66-1.896L1.414 9.364c-1.607.64-1.583 1.553-.273 1.969l5.365 1.673L18.961 6.08c.6-.392 1.145-.175.696.217L9.999 15.168z" />
    </svg>
  );
}
