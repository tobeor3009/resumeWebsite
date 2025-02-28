import { twMerge } from 'tailwind-merge'
import "@/app/globals.css";

export function SpanBoldInvert({ children, className }: 
    Readonly<{children: React.ReactNode, className?: string}>) {
    const classNameMerged: string = twMerge("text-[var(--background)] bg-[var(--foreground)] px-1", "font-bold", className);
    return <span className={classNameMerged}>{children}</span>;
}

export function SpanSemiBold({ children, className }: Readonly<{children: React.ReactNode, className?: string}>) {
    const classNameMerged: string = twMerge("text-base font-semibold", className);
    return <span className={classNameMerged}>{children}</span>;
}

export function SpanBold({ children, className }: Readonly<{children: React.ReactNode, className?: string}>) {
    const classNameMerged: string = twMerge("text-xl font-bold", className);
    return <span className={classNameMerged}>{children}</span>;
}

export function SpanBlue({ children, className }: Readonly<{children: React.ReactNode, className?: string}>) {
    const classNameMerged: string = twMerge("text-4xl text-blue-400 font-semibold", className);
    return <span className={classNameMerged}>{children}</span>;
}

export function SpanBadge({ children, className }: Readonly<{children: React.ReactNode, className?: string}>) {
    const classNameMerged: string = twMerge("inline-block w-fit h-fit bg-[var(--foreground-secondary)] text-white text-sm px-2 py-1 rounded-full", className);
    return <span className={classNameMerged}>{children}</span>;
}

export function PSubTitle({ children, className }: Readonly<{children: React.ReactNode, className?: string}>) {
    const classNameMerged: string = twMerge("text-2xl font-semibold text-[var(--foreground-secondary)]", className);
    return <p className={classNameMerged}>{children}</p>;
}