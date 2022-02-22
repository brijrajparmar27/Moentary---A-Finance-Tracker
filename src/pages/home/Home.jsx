import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Add from "../../components/add/Add";
import Card from "../../components/card/Card";
import useAuthContext from "../../hooks/useAuthContext";
import useCollection from "../../hooks/useCollection";
import "./Home.css";

const Home = () => {
  const { user, setUser } = useAuthContext();
  const { documents } = useCollection("transactions");
  const navig = useNavigate();

  useEffect(() => {
    // console.log("inside useeffect");
    !user && navig("/");
    // console.log(documents);
    // console.log(user.displayName);
    
    // console.log(documents)
    // console.log(user.uid);
  }, [user,documents]);

  return (
    <div className="Home">
      <div className="left_contain">
        <div className="card_contain">
          {user &&
            documents &&
            documents.map((each) => {
              return <Card each={each} key={each.id} />;
            })}

          {documents && documents.length == 0 && (
            <div className="empty_contain">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_ydo1amjm.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          )}
          {!documents && (
            <div className="anim_contain">
              <lottie-player
                src="https://assets3.lottiefiles.com/private_files/lf30_lndg7fhf.json"
                background="transparent"
                speed="1"
                style={{ width: "200px", height: "200px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          )}
        </div>
      </div>
      <div className="right_contain">{user && <Add uid={user.uid} />}</div>
    </div>
  );
};

export default Home;
