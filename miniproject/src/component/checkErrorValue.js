function CheckErrorValue(values) {
  const errors = {};

  const emailIsemty =
    /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/g;

  if (values.name === "") {
    errors.name = "Name không được để trống";
  }

  if (values.email === "") {
    errors.email = "Email không được để trống";
  } else if (!emailIsemty.test(values.email)) {
    errors.email = "Email không hợp lệ";
  }

  if (values.gender === "") {
    errors.gender = "Gender không được để trống";
  }
  if (values.status === "") {
    errors.status = "Status không được để trống";
  }

  return errors;
}

export default CheckErrorValue;
