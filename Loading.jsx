export const Loading = () => {
    return (
        <div 
           style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'white',
            }}
        >
            <img 
                src="https://cdnl.iconscout.com/lottie/premium/thumb/loading-5966360-4958661.gif" 
                alt="Loading..." 
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '8px',
                }} 
            />
        </div>
    );
};
