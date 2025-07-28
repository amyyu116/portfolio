import { Switch } from "antd";
import { useEffect, useState } from "react";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";

export function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <Switch
            checked={darkMode}
            checkedChildren={<BulbFilled />}
            unCheckedChildren={<BulbOutlined />}
            onChange={(checked) => setDarkMode(checked)}
        />
    );
}
