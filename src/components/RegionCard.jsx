export default function RegionCard({ regionName, regionImg }){
    return (
        <>
           
      <img 
        alt={regionName} 
        src={regionImg} 
        className="w-[320px] h-[192px] object-cover rounded-md"
      />
      <p><b>Region: </b> {regionName}</p>
    
        </>
    );
};