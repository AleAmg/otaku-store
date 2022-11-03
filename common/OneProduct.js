import style from "../styles/OneProduct.module.css";
import Image from "next/image";

export default function OneProduct({ data }) {
  return (
    <div className={style.container}>
      <Image
        src={data.image}
        height={512}
        width={768}
        alt="Image for a product"
      ></Image>
      {data.available ? <em>Disponible</em> : <em>Sin cupos</em>}

      <h1 className={style.title}>
        Pikachu<sup>{data._id[0]}</sup>
      </h1>
      <h2>
        Price: <em>${data.price}</em>
      </h2>
    </div>
  );
}
