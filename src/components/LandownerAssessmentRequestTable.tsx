import { useGetAssessmentRequests } from '@hooks/queries/currentUser/useGetAssessmentRequests';
import { AssessmentRequestTable } from './AssessmentRequestTable';

interface Props {
  userId?: string;
  propertyId?: number;
}

export const LandownerAssessmentRequestTable: React.FC<Props> = ({ propertyId }) => {
  const { data: assessmentRequests } = useGetAssessmentRequests(propertyId);

  return <AssessmentRequestTable assessmentRequests={assessmentRequests} />;
};
