import './SocialCard.css'
const SocialCard=({userData})=>{
    return(
        <div className="card">
          <div className="card_title"> {userData.name}</div>
          <div className="card_info">
            <div className="gender">gender : {userData.gender}</div>
            <div className="birth">D.O.B : {userData.birth_year}</div>
            <div className="height">height : {userData.height}</div>
            <div className="mass">mass : {userData.mass}</div>
            
          </div>
        </div>
    )
};

export default SocialCard;