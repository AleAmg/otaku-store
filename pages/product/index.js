import Link from "next/link";
import Product from "../../models/Product";
import PageLayout from "./../../components/PageLayout";
import style from "./../../styles/Product.module.css";
import dbConnection from "./../../lib/dbConnection";
import Image from "next/image";

export default function Article({ products }) {
  return (
    <PageLayout>
      <div className={style.product_container}>
        {products.map((article, i) => {
          return (
            <div className={style.card} key={i}>
              <Link href={`/product/${article._id}`}>
                <a>
                  <Image
                    src={article.image}
                    height={512}
                    width={768}
                    alt="Image for a product"
                  ></Image>
                  <h1>
                    {article._id[0]} - {article.title}
                  </h1>
                  <p>${article.price}</p>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  try {
    await dbConnection();
    const res = await Product.find({});

    const products = res.map((doc) => {
      const product = doc.toObject();
      product._id = `${product._id}`;
      return product;
    });
    return { props: { products } };
  } catch (err) {
    console.log(err);
  }
}
