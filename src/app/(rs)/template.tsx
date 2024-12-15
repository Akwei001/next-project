export default async function Template({children} : {children: React.ReactNode}) {

    return (
            <div className="animate-appear">
                {children}
            </div>
        
        )
}

// A template re-renders everytime, a layout does not. Layout re-renders when the application loads (So the header won't continue to load in this case)