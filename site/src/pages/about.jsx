import { VStack, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const About = () => {
  return (
    <VStack width={{ base: "100%", md: "50%", lg: "30%" }} align='left'>
      <Text fontSize={35} fontFamily='cursive' pt={6}>
        About Me
      </Text>
      <Text letterSpacing={1.2} fontSize='large'>
        I’m a passionate{" "}
        <Text as='span' fontWeight='bold'>
          Software Developer
        </Text>{" "}
        with a focus on continuous learning and improvement. Over the past year,
        I’ve dedicated my time to solving LeetCode challenges, built both
        front-end and backend applications using Next.js,Chakra UI,Node.js,Mongo
        DB, teaching myself{" "}
        <a
          href='https://trailhead.salesforce.com/content/learn/superbadges/superbadge_admin_superset'
          target='_blank'
        >
          <Text as='span' color='orange'>
            Salesforce administration
          </Text>
        </a>
        , and preparing for Salesforce certification. I also joined{" "}
        <a href='https://www.codepath.org/' target='_blank'>
          <Text as='span' color='orange'>
            CodePath
          </Text>
        </a>{" "}
        to enhance my technical interview skills.
      </Text>
      <Text fontSize={20} fontFamily='cursive' pt={6}>
        Technical Skills Development
      </Text>

      <UnorderedList>
        <ListItem>
          LeetCode Challenges: Solved over 100 LeetCode problems, focusing on
          algorithms and data structures.
        </ListItem>
        <ListItem>
          New Technologies: Currently learning TypeScript and exploring cloud
          computing with AWS.
        </ListItem>
      </UnorderedList>
      <Text fontSize={20} fontFamily='cursive' pt={6}>
        Projects
      </Text>

      <UnorderedList>
        <ListItem>
          E-commerce Web App: Developed a mobile-responsive e-commerce platform
          using Next.js and MongoDB.
        </ListItem>
        <ListItem>
          Accountant App: Optimized a web app for an accountant, resulting in a
          4-fold increase in organic traffic.
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};

export default About;
