import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="perfume">
      <h1 className="perfume">Eau de Parfum</h1>
      <img className="perfume" src="/perfume12.png" alt="Perfume" />

      <p className="perfume">
        Experience the essence of elegance with our exclusive Eau de Parfum.
        Perfect for any occasion.
      </p>
      <span className="perfume"></span>

      <button className="perfume">Add to Cart</button>

      {/* Second Product Image */}
      <h2 className="perfume">Another Variant</h2>
      <Image
        className="perfume"
        src="/perfume13.png" // Ensure this image exists in the public folder
        alt="Another Perfume Variant"
        width={500} // Specify the desired width
        height={500} // Specify the desired height
      />
      <p className="perfume">
        Discover a new scent with our additional perfume variant. Ideal for
        those who want something different.
      </p>
      <div className="perfume">
        <span className="perfume">$89.99</span>
      </div>
      <button className="perfume">Add to Cart</button>

      {/* Third Product Image */}
      <h2 className="perfume">Limited Edition</h2>
      <Image
        className="perfume"
        src="/perfume14.png" // Ensure this image exists in the public folder
        alt="Limited Edition Perfume"
        width={500} // Specify the desired width
        height={500} // Specify the desired height
      />
      <p className="perfume">
        Celebrate a special occasion with our limited edition perfume.
      </p>
      <div className="perfume">
        <span className="perfume">$99.99</span>
      </div>
      <button className="perfume">Add to Cart</button>
    </div>
  );
};

export default Product;
