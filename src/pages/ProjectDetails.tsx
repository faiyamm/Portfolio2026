

import { Button } from '../components/ui/Button';

export const ProjectDetails = () => {
    return (
        <main>
            <Button onClick={() => window.history.back()}>&lt;- Go Back</Button>
            <h1>Project Details</h1>
        </main>
    );
};
