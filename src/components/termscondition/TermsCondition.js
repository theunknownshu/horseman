import { Typography, Button } from "@mui/material";
import { terms_condition_json } from "../../constant/_helper";
import { useNavigate } from "react-router-dom";

function TermsCondition() {
  const navigate = useNavigate();

  const styles = {
    backbutton: {
      borderRadius: "20px",
      backgroundColor: "black"
    }
  };
  return (
    <div className="container mt-5" style={{ textAlign: "left" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: ["1.5rem", "2rem", "3rem", "3rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
      >
        Terms & Conditions
      </Typography>
      <Typography
        sx={{ fontSize: ["10px", "12px", "16px", "20px"] }}
        className="mt-5"
      >
        {terms_condition_json.content}
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontSize: ["1.5rem", "2rem", "3rem", "3rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
        className="mt-5"
      >
        OWNERSHIP
      </Typography>
      <Typography
        variant="h4"
        className="mt-5"
        sx={{
          fontSize: ["1.3rem", "1.8rem", "2.5rem", "2.5rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
      >
        - You Own the NFT
      </Typography>
      <Typography sx={{ fontSize: ["10px", "12px", "16px", "20px"] }}>
        Each Horseman is an NFT on the Ethereum blockchain. When you purchase an
        NFT, you own the underlying The Horseman Club Token, completely.
        Ownership of the NFT is mediated entirely by the Smart Contract and the
        Ethereum Network: at no point may we seize, freeze, or otherwise modify
        the ownership of any The Horseman Club Token.
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontSize: ["1.3rem", "1.8rem", "2.5rem", "2.5rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
        className="mt-5"
      >
        - Personal Use
      </Typography>
      <Typography sx={{ fontSize: ["10px", "12px", "16px", "20px"] }}>
        Subject to your continued compliance with these Terms, we grant you a
        worldwide, royalty-free license to use, copy, and display the purchased
        Art, along with any extensions that you choose to create or use, solely
        for the following purposes: <br></br>· for your own personal,
        non-commercial use;
        <br></br>· as part of a marketplace that permits the purchase and sale
        of your Horseman /NFT, provided that the marketplace cryptographically
        verifies each Horseman Token owner’s rights to display the Art for their
        Horseman Token to ensure that only the actual owner can display the Art.{" "}
        <br></br>· as part of a third-party website or application that permits
        theinclusion, involvement, or participation of your Horseman Token,
        provided that the website/application cryptographically verifieseach
        Horseman Token owner’s rights to display the Art for their Horseman
        Token to ensure that only the actual owner can display the Art, and
        provided that the Art is no longer visible once the owner of The
        Horseman Token leaves the website/application.
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontSize: ["1.3rem", "1.8rem", "2.5rem", "2.5rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
        className="mt-5"
      >
        - Commercial Use
      </Typography>
      <Typography sx={{ fontSize: ["10px", "12px", "16px", "20px"] }}>
        Subject to your continued compliance with these Terms, we grantyou an
        unlimited, worldwide license to use, copy, and display the purchased Art
        for the purpose of creating derivative works basedupon the Art
        (“Commercial Use”). Examples of such CommercialUse would e.g., be the
        use of the Art to produce and sell merchandise products (T-Shirts, etc.)
        displaying copies of the Art. For the sake of clarity, nothing in this
        Section will be deemed to restrict you from <br></br>· owning or operating a
        marketplace that permits the use and sale of The Horseman Token
        generally, provided that the marketplace cryptographically verifies each
        Horseman Token owner’s rights to display the Art for their Token to
        ensure that only the actual owner can display the Art. <br></br>· owning or
        operating a third-party website or application that permits the
        inclusion, involvement, or participation of Horseman Tokens generally,
        provided that the third-party website or application cryptographically
        verifies each The Horseman Token owner’srights to display the Art for
        their Horseman Token to ensure that onlythe actual owner can display the
        Art, and provided that the Art is no longer visible once the owner of
        the purchased Horseman Token leaves the website/application; <br></br>· or
        earning revenue from any of the foregoing.
      </Typography>
      <div className="row d-flex justify-content-center mt-5">
        <Button
          style={styles.backbutton}
          variant="contained"
          onClick={() => navigate("/")}

          // disabled
        >
          back
        </Button>
      </div>
      <br></br>
    </div>
  );
}

export default TermsCondition;
