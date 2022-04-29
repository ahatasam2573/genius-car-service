import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='text-center mt-4'>
                <p>
                    <small>
                        Copyright &copy; {year} by The Car Doctor
                    </small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;