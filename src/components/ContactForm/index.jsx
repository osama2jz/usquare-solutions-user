import {
  Button,
  Grid,
  Select,
  TextInput,
  Textarea,
  useMantineTheme,
} from "@mantine/core";

const ContactForm = () => {
  const theme = useMantineTheme();
  return (
    <form>
      <Grid
        style={{
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          padding: "40px 20px",
        }}
      >
        <Grid.Col sm={12}>
          <Select placeholder="Select" data={[]} />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput placeholder="Email" />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput placeholder="Mobile Number" />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput placeholder="First Name" />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput placeholder="Last Name" />
        </Grid.Col>
        <Grid.Col md={12}>
          <Textarea placeholder="Description" minRows={4} />
        </Grid.Col>
        <Button color={theme.colors.blue} m="auto">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default ContactForm;
