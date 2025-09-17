export default function Profile({
  bg,
  Event,
}: {
  bg: string;
  Event: () => void;
}) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={bg} alt="background-pic" />
        </div>
        <div className="profile">
          <img
            className="prof-img"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile-pic"
          />
          <h3 className="alias">Sally Ramos</h3>
          <p className="username">@sallytheramos</p>
          <button onClick={Event}>Follow</button>
        </div>
      </article>
    </>
  );
}
