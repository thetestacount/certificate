

const CertificatePage = () => {
    return (
        <div>
            <div style={{ marginLeft:'-7px', padding:'0.5rem 1.5rem', marginBottom:'1rem', boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)', display:'flex'}}>
                <img src="/img/logo.jpg" alt="Logo" style={{width:'5rem', height:'5rem'}} />
                <div>
                    <h3 style={{fontSize:'1.5rem', margin:'0'}}>One's Own Financer</h3>
                    <p style={{margin:'0'}}>View your certificate here</p>
                </div>
                <div>

                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', width: '80vw', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>

                    <div style={{ marginTop: '20px', textAlign: 'left' ,marginBottom:'3rem' }}>
                        <p><strong>Certificate Number:</strong> 3308c41b-93cb-485a-9ee3-852264f8ef83</p>
                        <p><strong>Certificate Holder Name:</strong> Nishant Shete</p>
                        <p><strong>Issued Date:</strong> July 2024</p>
                    </div>
                    
                    <img
                        src="/img/nishantshete.jpg" // path relative to the `public` directory
                        alt="Certificate Image"
                        style={{maxWidth:'80vw', maxHeight:'100vh', objectFit:'contain'}}
                    />
                </div>

            </div>
        </div>
    );
};

export default CertificatePage;
