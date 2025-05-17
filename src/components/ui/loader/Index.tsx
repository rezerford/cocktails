import { ClockLoader } from 'react-spinners';
import * as React from "react";

const PageLoader: React.FC = () => (
    <div className="grid place-items-center h-screen">
        <ClockLoader />
    </div>
);

export default PageLoader;
