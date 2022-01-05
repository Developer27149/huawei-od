import { Input, Message } from "@arco-design/web-react";
import { useState } from "react";
import { IconCode } from "@arco-design/web-react/icon";
import { useRouter } from "next/router";
import { IconFaceSmileFill,IconClose } from '@arco-design/web-react/icon';

export default function QuickTo() {
  const router = useRouter();
  const [v, setV] = useState("");
  const [isError, setIsError] = useState(false);

  const onPressEnter = () => {
    if (/^\d+$/.test(v)) {
      router.push(`/post/${v}`);
      setV("");
      Message.info({ icon: <IconFaceSmileFill />, content: '正在跳转！' ,position: "bottom"})
    }
  };
  const handleChange = (e: string) => {
    if (!/^\d+$/.test(e) && e !== "") {
      Message.error({ icon: <IconClose />, content: '题号必须是数字' ,position: "bottom"})
      setIsError(true);
    } else {
      setIsError(false);
    }
    setV(e);
  };
  return (
    <Input
      style={{
        width: "min(50vw, 400px)",
      }}
      value={v}
      error={isError}
      onChange={handleChange}
      placeholder="题号直达"
      prefix={<IconCode />}
      allowClear={true}
      onPressEnter={onPressEnter}
    />
  );
}
