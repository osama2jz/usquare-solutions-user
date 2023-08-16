import {
  Button,
  Grid,
  Select,
  TextInput,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import { backendUrl } from "../../constants";
import axios from "axios";
import { useForm } from "@mantine/form";

const ContactForm = () => {
  const theme = useMantineTheme();
  // const [data, setData] = useState([]);
  const addContact = (val) => {
    axios.post(backendUrl + "/contact/add", val);
    form.reset();
  };
  const form = useForm({
    initialValues: {
      email: "",
      service_name: "",
      phone_number: "",
      project_description: "",
      first_name: "",
      last_name: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      service_name: (value) => (value?.length < 1 ? "Select Service" : null),
      phone_number: (value) =>
        value?.length < 1 ? "Enter valid number." : null,
      project_description: (value) =>
        value?.length < 1 ? "Enter description." : null,
      first_name: (value) => (value?.length < 1 ? "Enter First Name." : null),
      last_name: (value) => (value?.length < 1 ? "Enter Last Name." : null),
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => addContact(values))}>
      <Grid
        style={{
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          padding: "40px 20px",
        }}
      >
        <Grid.Col sm={12}>
          <Select
            placeholder="Select"
            data={[
              { label: "AR/VR Games", value: "AR/VR Games" },
              { label: "Web App", value: "Web App" },
              { label: "Mobile App", value: "Mobile App" },
              { label: "Digital Marketing", value: "Digital Marketing" },
              {
                label: "ERP & Business Solutions",
                value: "ERP & Business Solutions",
              },
              { label: "Graphic Designing", value: "Graphic Designing" },
            ]}
            {...form.getInputProps("service_name")}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput placeholder="Email" {...form.getInputProps("email")} />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput
            placeholder="Mobile Number"
            {...form.getInputProps("phone_number")}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput
            placeholder="First Name"
            {...form.getInputProps("first_name")}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput
            placeholder="Last Name"
            {...form.getInputProps("last_name")}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <Textarea
            placeholder="Description"
            minRows={4}
            {...form.getInputProps("project_description")}
          />
        </Grid.Col>
        <Button color={theme.colors.blue} m="auto" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default ContactForm;
