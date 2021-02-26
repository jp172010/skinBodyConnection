import React from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Placeholder from "../images/placeholder.jpg";
import Col from "react-bootstrap/Col";
import { MainNav } from "./MainNav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Element } from "react-scroll";
import "../css/Home.css";

function Home() {
  return (
    <Container fluid id="mainDivHome">
      <Element name="topElement">
        <Row className="justify-content-center">
          <Image src="images/logo.jpg" id="logo" rounded />
        </Row>
      </Element>
      <br />
      <MainNav />
      <br />
      <Row className="justify-content-center">
        <ReactPlayer
          url="images/demoVideo.mov"
          height="60vh"
          playing={true}
          controls={true}
        />
      </Row>
      <br />
      <Row>
        <Col>
          <Element name="aboutElement">
            <Jumbotron id="about">
              <Row>
                <Col xs={12} md="2">
                  <Image src={Placeholder} />
                </Col>
                <Col xs={12} md="10">
                  <h4>About Jennifer</h4>
                  <p>
                    Jennifer Breslin has been an esthetician since 2016 and
                    graduated from the Aveda Institute of Austin. Being born and
                    raised in Austin, Texas she has held a very healthy and
                    active lifestyle. She has integrated that healthy lifestyle
                    in her treatment room using holistic skincare and wellness
                    practices. She previously trained under a physician in
                    Austin where she experienced the medical side of Aesthetics.
                    Having that experience drove her towards her decision to
                    step away from lasers and chemical peels, and focus on
                    healing the skin from the inside-out. By using non-toxic
                    skincare products and treatments we can achieve ethical and
                    permanent change without damaging nor thinning your skin. In
                    her free time you can catch her playing outdoors with her
                    son, walking town lake, paddle boarding or checking out new
                    local shops and restaurants.
                  </p>
                </Col>
              </Row>
            </Jumbotron>
          </Element>
        </Col>
      </Row>
      <Row>
        <Col>
          <Element name="servicesElement">
            <Jumbotron id="services">
              <Container fluid>
                <h1>Services</h1>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        Holistic Signature Facial – 60 min -- $100
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Based on a 4-point analysis of body temperature, energy
                        levels, skin appearance, and skin conditions determine
                        the products and facial movement techniques. Osmosis
                        products paired with specific application techniques
                        direct energy to help heal the skin and body. Results
                        are felt immediately, are visible, and create a balanced
                        well-being.
                        <ul>
                          <li>
                            The Remedy – Rehabilitate intolerant skin and
                            reverse the skin’s sensitivity and irritation
                          </li>
                          <li>
                            Clear Up – Target the source of blemishes, balance
                            oil, and help retrain skin to maintain healthier,
                            clearer condition.
                          </li>
                          <li>
                            Quencher – Gently exfoliate to remove dull surface
                            cells, nurture, and rehydrate.
                          </li>
                          <li>
                            Time Fighter – Enhance elasticity, texture, tone,
                            and clarity for a refreshed, nourished, and youthful
                            look
                          </li>
                          <li>
                            Skin Rehab – Improve signs of environmental damage
                            from sun, pollution, and stress. Pigment correcting
                            boosters help guard against further damage
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="2">
                        Facial Infusion – 60 min --$130
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        This treatment offers your skin a 30-day collagen
                        production increase. It is unique because it avoids
                        damaging the epidermis by penetrating several high-dose
                        active ingredients into the dermis through liposomal
                        delivery. Facial Infusion enhances results for acne,
                        aging, rosacea, and hyperpigmentation and will be
                        customized for each individual by adding powder blends
                        and actives for increased correction. The product is a
                        concentrated formula of Retinaldehyde which is able to
                        penetrate 6 times deeper than regular retinol and proven
                        to increase collagen production by 1000%. This
                        non-inflammatory treatment works with the skin to
                        stimulate new cell turnover. This would be the
                        equivalent of your facial peel treatment.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="3">
                        Nano-needle Facial Infusion – 60 min -- $180
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        We use a non-invasive, nano-technology chip to boost
                        your collagen production and deliver nutrients deeper
                        into the dermal layer. This treatment is completely
                        customized for your specific skin concerns such as acne
                        and acne scarring, anti-aging, fine lines and wrinkles,
                        large pores, sun damage, dry or dehydrated skin, etc. We
                        use the Facial Infusion product and pair this with
                        powder actives which are able to penetrate much deeper
                        leaving longer lasting and more enhanced results. Enjoy
                        a painless treatment with no downtime.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="4">
                        Designer Facial – 75-90 min -- $120 - $150 - $200
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        Enjoy extra relaxation with an aromatherapy infused
                        back, shoulder, neck and scalp manipulations. Choose
                        between a Holistic Signature Facial, Facial Infusion, or
                        Nanoneedle Facial Infusion to follow the body treatment.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="5">
                        Total Package Facial – 90-120 min -- $150 - $180 - $230
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        Start with a 30 min back treatment, including skin
                        manipulations, extractions and customized masks. Choose
                        between a Holistic Signature Facial, Facial Infusion, or
                        Nanoneedle Facial Infusion to follow the back treatment.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="6">
                        Crystal/Diamond Microdermabrasion – 30 min $115 – add on
                        to any other service $50
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body>
                        Choose between either a crystal or diamond tip
                        microdermabrasion to exfoliate the skin particles which
                        then are simultaneously vacuumed away. This allows for
                        better product penetration, helps clear clogged pores
                        smooth textured skin, reduce pigmentation and scars. You
                        can add on a series of masks, Facial Infusion, or
                        nanoneedle Facial infusion to expedite your skin
                        desires.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="7">
                        Celluma Light Thrapy – 30 min $30 – add on to any
                        service $20
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                      <Card.Body>
                        Celluma is FDA cleared for skin conditions such as acne,
                        wrinkles, muscle and joint pain. It is also CE cleared
                        for wound healing. Depending on the condition you would
                        like to be treated, you will need a series of
                        treatments.
                        <ul>
                          <li>
                            Acne Treatment
                            <br />
                            Blue light therapy kills the bacteria that cause
                            breakouts, while reducing inflammation, pimples and
                            redness associated with acne. Blue and Red light
                            work synergistically in improving acne by combining
                            antibacterial and anti-inflammatory action.
                          </li>
                          <li>
                            Anti-Aging
                            <br />
                            Reduce fine lines and wrinkles. It is clinically
                            verified that red and near-infrared wavelengths
                            enhance your body’s natural ability to generate
                            collagen and elastin by activating the fibroblast
                            cells.
                          </li>
                          <li>
                            Pain Management
                            <br />
                            Relieve arthritic pain, muscle, joint pain, and
                            stiffness. Infrared light therapy uses specific,
                            proven wavelengths to stimulate a natural response
                            in human tissue that can increase circulation,
                            accelerate tissue repair, ease muscle pain, ease
                            joint stiffness, and enhance overall cell
                            performance on a microscopic level. Infrared light
                            therapy works by boosting cellular energy to
                            encourage and enhance the body’s natural healing
                            abilities.
                          </li>
                          <li>
                            Wound Healing
                            <br />
                            Accelerate the closure of dermal wounds. Light
                            therapy has been shown to accelerate tissue repair,
                            decrease wound size and accelerate wound closure.
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="8">
                        Lash Extensions – 1 hour – 3 hours
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="8">
                      <Card.Body>
                        Lash extensions are semi-permanent, faux mink fibers,
                        that are applied strand by strand with specially
                        formulated non-irritating glue to your own lashes to
                        enhance your eye shape. Traditional false eyelashes,
                        which you remove after each use, are applied directly to
                        the skin and have pre-designed depth and layers that
                        don't take your unique eye shape into account.
                        Extensions, on the other hand, attach to the lashes
                        themselves, so they grow out naturally and can be
                        customized to create specific depth and elongation to
                        your eye shape for the exact effect you crave. You will
                        need a fill every 2-3 weeks as your natural lashes shed
                        and are replaced with new lashes.
                        <ul>
                          <li>
                            Volume- Full Set: $250 Fill: $125 <br />
                            This is where I apply multiple thinner lashes that
                            are fanned out, onto 1 single natural lash. Giving
                            you the look of depth and fullness.
                          </li>
                          <li>
                            Hybrid Mix- Full: $200 Fill: $100 <br />
                            This is a combination of Volume lashes and Classic
                            Lashes. You can achieve a natural look or a more
                            dramatic look.
                          </li>
                          <li>
                            Classic- Full Set: $150 Fill: $75 <br />
                            This is where I apply a single extension on a single
                            natural lash. You will achieve a very natural look.
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Container>
            </Jumbotron>
          </Element>
        </Col>
      </Row>
      <Row>
        <Col>
          <Element>
            <Jumbotron id="policies">
              <Container>
                <h1>Policies</h1>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        24 Hour Cancellation notice
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        I know that life happens sometimes, so if your
                        appointment is cancelled less than 24 hours in advance
                        you will be refunded 50% of your booking fee. A booking
                        fee is an amount of money paid up front to secure your
                        appointment time. This amount that is pre-paid is always
                        used towards your appointment cost. I will allow 1
                        freebie, meaning I will refund the total booking fee
                        just 1 time when cancelled less than 24 hours before the
                        appointment time.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="1">
                        Dont Be Tardy To The Party
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        Whether it’s a virtual appointment or in-person
                        appointment, please be ready at the scheduled time. I do
                        not schedule extra time in case someone may run late,
                        every appointment has a set time and I can not go over
                        that time and cost someone else part of their
                        appointment.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="2">
                        Product Returns
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        If the product is not opened and it’s been within 20
                        days of purchase, you may return the product. The
                        purchaser will need to pay for shipping costs via USPS
                        in order to return the product. Opened products may be
                        returned ONLY if the user is experiencing a physical
                        allergic reaction. Photos of the issues are required,
                        email them to Jenbreslin920@gmail.com, within 20 days of
                        purchasing. Please email me for further instructions.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="3">
                        Allergic Reaction
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        If you acquire a physical allergic reaction from a Lash
                        Extension Application, you are eligible for a free
                        removal. Photos of the allergic reaction must be emailed
                        to me at Jenbreslin920@gmail.com, within 3 days of the
                        application.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="4">
                        Pricing Policy
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        Although I make every effort to keep my website and menu
                        updated, please note that prices and services are
                        subject to change at any time.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Container>
            </Jumbotron>
          </Element>
        </Col>
      </Row>
      <Row>
        <Col>
          <Element name="VCElement">
            <Jumbotron id="virtual">
              <Container fluid>
                <Row className="justify-content-center">
                  <h1>Taking it Virtual</h1>
                </Row>
                <Row className="justify-content-center">
                  <Button href="./virCon" variant="secondary">
                    Book VC
                  </Button>
                  <Button variant="secondary">Skin Questionaire</Button>
                </Row>
              </Container>
            </Jumbotron>
          </Element>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
