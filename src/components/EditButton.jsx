import { useContext } from "react";

import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px"
};

export const EditButton = (props) => {
  const { isAdmin } = useContext(AdminFlagContext);
  //isAdminがfalse(管理者でない)時にボタンを非活性化にする

  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
export default EditButton;
