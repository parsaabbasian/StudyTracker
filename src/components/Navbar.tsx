'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const { data: session } = useSession();
    const pathname = usePathname();

    // Hide Navbar on Auth pages
    const isAuthPage = pathname === '/login' || pathname === '/register';
    if (isAuthPage) return null;

    return (
        <nav className={`glass ${styles.navbar}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.brand}>
                    StudyTrackr
                </Link>

                <div className={styles.navLinks}>
                    {session ? (
                        <>
                            <Link href="/dashboard" className={styles.link}>
                                Dashboard
                            </Link>
                            <button
                                onClick={() => signOut({ callbackUrl: '/' })}
                                className={styles.signOutBtn}
                                title="Sign Out"
                            >
                                Sign Out
                            </button>
                            <div className={styles.userAvatar}>
                                {session.user?.name?.[0]?.toUpperCase() || 'U'}
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className={styles.link}>
                                Login
                            </Link>
                            <Link href="/register" className={styles.cta}>
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
