import OneProduct from "../../common/OneProduct";
import dbConnection from "./../../lib/dbConnection";
import Product from "../../models/Product";
import PageLayout from "../../components/PageLayout";

export default function ArticleOne({ success, error, product }) {
  

  return (
    <PageLayout>
      <OneProduct data={product}></OneProduct>
    </PageLayout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    await dbConnection();
    const product = await Product.findById(params.id).lean();

    if (!product) {
      return {
        props: {
          success: false,
          error: "Err",
        },
      };
    }
    product._id = `${product._id}`;

    return {
      props: {
        success: true,
        product,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: "Err",
    };
  }
}
