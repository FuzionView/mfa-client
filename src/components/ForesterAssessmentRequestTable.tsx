import { useGetAssessmentRequests } from '@hooks/queries/byUserId/useGetAssessmentRequests';
import { AssessmentRequestTable } from './AssessmentRequestTable';

interface Props {
  userId?: string;
  propertyId?: number;
}

export const ForesterAssessmentRequestTable: React.FC<Props> = ({ userId, propertyId }) => {
  const { data: assessmentRequests } = useGetAssessmentRequests(userId, propertyId);

  return <AssessmentRequestTable assessmentRequests={assessmentRequests} />;
};
