import React from "react";
import { Container, Typography, Button, List } from "@mui/material";
import Layout from "../../components/layout/layout";

function Policy() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Typography variant="h4" mt={5} mb={5}>
          Legal and Policies
        </Typography>
        <Typography variant="body1" align="left" mb={3}>
          Please take a moment to review our Terms and Conditions and Privacy
          Policy before proceeding. It is crucial for both you and us to be
          aware of our guidelines. By continuing to use our website and related
          applications, you confirm that you have read and agreed to the Terms
          and Conditions and Privacy Policy. If you access or use the website,
          application, or services, or upload or download any content on the
          website, application, or services, you are indicating that you have
          read, comprehended, and accepted these terms, whether or not you have
          registered with the site and application. If you do not accept these
          terms, you are not authorized to access or use the site, application,
          services, or collective content. If you are accepting these terms on
          behalf of a company or other legal entity, you certify that you have
          the power to bind that entity to these terms. In that event, the terms
          "User," "you," and "your" will refer to that entity. Additionally, you
          confirm that you are over 18 years old and located in a jurisdiction
          where you can enter into legally binding agreements and comply with
          internet-based terms and conditions.
        </Typography>

        {/* <Typography variant="h6" align="left" mb={2}>
          Overview{" "}
        </Typography>
        <Typography variant="body1" align="left" mb={3}>
          Welcome to our website, where you can find a variety of lessons and
          quizzes to support your teaching. We offer a subscription plan that
          gives you access to our premium lessons and quizzes. This page
          outlines our policies for subscriptions to our premium content.
        </Typography> */}

        <Typography variant="h6" align="left" mb={2}>
          Free Subscription
        </Typography>
        <ul
          style={{
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1.5",
            letterSpacing: "0.00938em",
            marginBottom: "24px",
          }}
        >
          <li>
            The Free Subscription commences on the Commencement Date and
            continues until the User’s account is terminated.
          </li>
          <li>
            Support Teacher grants Users a non-exclusive, non-transferable,
            fee-free limited licence to use the Free Materials in accordance
            with these Terms of Use until the User’s account is terminated or
            has expired under these Terms of Use.
          </li>
          <li>
            The User agrees to use and access the Free Materials on the terms of
            the Subscription and for the purpose for which the Free Materials
            are provided.
          </li>
        </ul>

        <Typography variant="h6" align="left" mb={2}>
          Premium Content
        </Typography>
        <Typography variant="body1" align="left" mb={3}>
                        <ul
          style={{
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1.5",
            letterSpacing: "0.00938em",
            marginBottom: "24px",
          }}
        >
          <li>
          In order to access our premium lessons and quizzes, teachers must
          subscribe to our premium (1 year) plan. 
          </li>
          <li>
          The premium plan provides
          access to the lessons and quizzes according to the user's teaching
          subject and grade.
          </li>
          <li>
          This plan will be canceled after the end of one
          year unless the user pay the yearly subscription fees.
          </li>

          <li>
          Users agree to use and
          access the Paid Materials on the terms of the Paid Subscription and
          for the purpose for which the Paid Materials are provided.
          </li>
        </ul>
        </Typography>

        <Typography variant="h6" align="left" mb={2}>
          Payment
        </Typography>
        <Typography variant="body1" align="left" mb={3}>
          At present, payment can only be made through Liban Post, and credit
          card payments are not currently accepted.{" "}
        </Typography>

        <Typography variant="h6" align="left" mb={2}>
          Refunds
        </Typography>
        <Typography variant="body1" align="left" mb={3}>
          We offer refunds on a case-by-case basis. If you are dissatisfied with
          our premium lessons and quizzes, please contact us at to discuss a
          refund.
        </Typography>

        <Typography variant="h6" align="left" mb={2}>
          Privacy{" "}
        </Typography>
        <Typography variant="body1" align="left" mb={3}>
          We value your privacy and are committed to protecting your personal
          information. We do not share your personal information with third
          parties. Please review our privacy policy for more information.
        </Typography>
      </Container>
    </Layout>
  );
}

export default Policy;
