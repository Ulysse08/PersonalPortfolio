import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { items } from './menuItems';
import { AnimatePresence, motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';

export const Sidebar = () => {
    const [isOpen, setOpen] = useState(false);
    const sidebarRef = useRef(null);
    const hamburgerRef = useRef(null);

    // Custom click away logic
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!sidebarRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
                if (isOpen) setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]); // Dependencies array to add/remove listener based on isOpen state

    const handleLinkClick = (e) => {
        e.stopPropagation();
        setOpen(false);
    };

    return (
        <>
            <div ref={hamburgerRef} className="relative">
                <Hamburger rounded distance="sm" toggled={isOpen} onToggle={setOpen} className="pb-12" />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        className="fixed top-[64px] bg-background bottom-0 right-0 z-30 w-full md:w-80 border-l border-t "
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul>
                            {items.map(item => (
                                <li key={item.title} className="hover:bg-dark">
                                    <Link
                                        to={item.path}
                                        onClick={handleLinkClick}
                                        className="flex flex-row justify-between text-medium font-semibold items-center p-5 mr-0 md:mr-6 hover:text-white"
                                    >
                                        {item.title}
                                        <item.Icon className="ml-2 text-lg" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

