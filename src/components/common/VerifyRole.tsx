import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Role } from "../../models/Role";

interface VerifyRoleProps {
  allow?: Role[];
  children: React.ReactNode;
}

const VerifyRole: React.FC<VerifyRoleProps> = ({ allow, children }) => {
  const [user] = useContext(UserContext);
  const role: any = user && user?.userType;

  if (!role) {
    return <div></div>;
  } else {
    switch (role) {
      case Role.WEB_MASTER:
        if (allow && allow.includes(Role.WEB_MASTER)) {
          return <>{children}</>;
        } else {
          return <></>;
        }
      case Role.STUDENT:
      case Role.WARDEN:
      case Role.LANDLORD:
        if (
          allow &&
          (allow.includes(Role.STUDENT) || allow.includes(Role.WARDEN) || allow.includes(Role.LANDLORD))
        ) {
          return <>{children}</>;
        } else {
          return <></>;
        }
      default:
        return null;
    }
  }
};

export default VerifyRole;
