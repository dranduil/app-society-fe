import React, { ReactNode } from 'react';

interface MainProps {
    children: ReactNode|undefined|null;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {children}
        </main>
    );
}

export default Main;
