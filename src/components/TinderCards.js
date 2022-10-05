import React, { useEffect, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
import axios from "./axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  const swipeRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }

    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(people.length - 1);
  const [lastDirection, setLastDirection] = useState();

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  // Copied code
  const canGoBack = currentIndex < people.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < people.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((person, index) => (
          <TinderCard
            ref={swipeRef}
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name, index)}
            onCardLeftScreen={() => outOfFrame(person.name, index)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            ></div>
            <div className="card-bio">
              <h3>{person.name}</h3>
              <p>{person.bio}</p>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="swipeButtons__left"
          onClick={() => {
            swipeRef.current.swipe("left");
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="swipeButtons__right"
          onClick={() => swipeRef.current.swipe("right")}
        >
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__lightning">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default TinderCards;

//  onPress = {() => swipeRef.current.swipeRight()}
