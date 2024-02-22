import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react';

function ProfileCard({ profile }) {
  return (
    <Card className="card w-96 h-104 bg-base-100 shadow-xl grid-cols-1 p-8">
      <CardHeader floated={false} className="h-80">
        <img src={profile.img} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center mt-6">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {profile.name}
        </Typography>
        {/* <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography> */}
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="GitHub">
          <Typography
            as="a"
            href={profile.git}
            target="_blank"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-github" />
          </Typography>
        </Tooltip>
        <Tooltip content="LinkedIn">
          <Typography
            as="a"
            href={profile.linkedin}
            target="_blank"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-linkedin" />
          </Typography>
        </Tooltip>
        {profile.website && <Tooltip content="Website">
          <Typography
            as="a"
            href={profile.website}
            target="_blank"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fas fa-link" />
          </Typography>
        </Tooltip>}
      </CardFooter>
    </Card>
  );
}

export default ProfileCard;
