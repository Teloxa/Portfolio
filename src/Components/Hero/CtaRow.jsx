// components/Hero/CtaRow.jsx
import styles from "./CtaRow.module.css";

const links = [
    {label: 'View my work', href: '#work', variant: 'Primary'},
    {label: 'View my GitHub', href: 'https://github.com/teloxa', variant: 'Secondary'},
    {label: 'Contact me', href: '#contact', variant: 'Tertiary'}
]

export default function CtaRow() {
    return (
        <div className={styles.ctaRow}>
            {links.map(({label, href, variant, external}) => (
                key={label}
                hreaf={href}
                classna
            ))}
    )

