export default function RegionCard(){
    return (
        <>
           
      <img 
        alt={regionName} 
        src={regionImg} 
        className="w-32 h-20 object-cover rounded-md"
      />
      <p><b>Region: </b> {regionName}</p>
    
        </>
    );
};