import classes from './CommunityCard.module.css';
import { Community } from '@nouns/prop-house-wrapper/dist/builders';
import CommunityProfImg from '../CommunityProfImg';
import { useTranslation } from 'react-i18next';

const CommunityCard: React.FC<{
  community: Community;
}> = props => {
  const { community } = props;
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <CommunityProfImg community={community} hover />
      <div className={classes.infoContainer}>
        <div className={classes.title}>{community.name}</div>
        <div className={classes.cardInfo}>
          <div className={classes.infoText}>
            <span>{community.numAuctions}</span>{' '}
            {community.numAuctions === 1 ? t('round') : t('rounds')}
          </div>
          <div className={classes.infoText}>
            <span>{community.numProposals}</span>{' '}
            {community.numProposals === 1 ? t('prop') : t('props')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
