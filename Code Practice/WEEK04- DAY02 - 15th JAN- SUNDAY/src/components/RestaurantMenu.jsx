import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Restorant id: {id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        perferendis, ipsum excepturi sequi odit itaque aperiam a? Labore
        exercitationem natus itaque obcaecati velit odit quidem iste consectetur
        maxime! Nam magnam fuga quisquam dolore temporibus? Voluptate iure
        inventore mollitia molestias tenetur modi quod iste voluptatum atque
        earum! Facilis illo est aspernatur accusamus, eveniet asperiores
        quibusdam eligendi mollitia similique molestias tempore aliquid
        quisquam, blanditiis, quos id minima atque neque laboriosam assumenda
        adipisci dolorum. Eaque iste porro necessitatibus eveniet enim, impedit
        eos, voluptas rem voluptatibus illum distinctio vero vitae qui id
        similique deleniti, explicabo iure doloremque perferendis! Nam facere
        eligendi necessitatibus aliquid consequatur?
      </p>
    </div>
  );
};

export default RestaurantMenu;
