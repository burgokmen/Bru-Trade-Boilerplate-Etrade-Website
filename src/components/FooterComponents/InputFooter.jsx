import React from "react";
import { Input, Button } from "@material-tailwind/react";

export function InputWithButton() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="flex">
      <Input
        type="email"
        label="Email Address"
        value={email}
        onChange={onChange}
        className="pr-20 text-[14px] rounded-none"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        className="rounded-none"
        size="sm"
        color={email ? "blue" : "blue"}
        disabled={!email}
      >
        Subscribe
      </Button>
    </div>
  );
}
