import { render } from "@testing-library/react-native";
import { Player } from "../../types/playerTypes";
import PlayerComponent from "../PlayerComponent";

test('Player Component', () => {
  const player : Player = {
    id: "76198",
    player_id: "506100",
    player_name: "Jude Bellingham",
    player_slug: "jude-bellingham",
    player_picture: "https://static.footballtransfers.com/resources/players/506100.png",
    age: "20",
    position_key: "2944839123_1060745282_498629140",
    position_short_name: "M (C), DM (RL)",
    team_name: "Real Madrid",
    team_short_name: "Real Madrid",
    team_slug: "es/real-madrid",
    team_picture: "https://static.footballtransfers.com/resources/teams/48.png",
    estimated_value: "€140.1M",
    country_id: "202",
    country_code: "uk",
    country_name: "England",
    sci_skill_smg: "81.0",
    sci_potential_smg: "98.4",
    sci_skill_color: "#274e13",
    sci_potential_color: "#2a0a43"
  };

  const { getByText } = render(<PlayerComponent player={player} />)

  expect(getByText(player.player_name)).toBeTruthy()
  expect(getByText(player.sci_skill_smg)).toBeTruthy()
})