export function Materials ({materials}: {materials: any[]}) { 
   
    return (
        <>
        {materials.length > 0 && (<div>
                    <p style={{textAlign: 'center'}}>Materiais Complementares</p>
                   <div style={{width: '100%',marginTop: '1rem', display: 'flex',rowGap: '1rem', flexDirection: 'column', justifyContent: 'center'}}>
                    {materials.map((element, index) => (
                       <div key={index}>
                            <p>{element.description}.</p> 
                            <a href={element.link}>Link</a> 
                       </div>
                    ))}
                    
                </div>
        </div>)}
        </>
      
    )
}