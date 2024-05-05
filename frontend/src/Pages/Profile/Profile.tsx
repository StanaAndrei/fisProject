import React from 'react';
import './Profile.css';
import { DEFAULT_PROFILE_PIC } from '../../konst';
import { useParams } from 'react-router';
import { axiosAuthInstToSv } from '../../network/server.net';
import User, { BeProfileI, FeProfileI, ROLE_MAPPING, SSProfileI } from '../../models/user.model';
import Collapsible from 'react-collapsible';
import FeProfile from './SubProfiles/FeProfile';
import BeProfile from './SubProfiles/BeProfile';
import SSProfile from './SubProfiles/SSProfile';
import { Link } from 'react-router-dom';
import { HttpStatusCode } from 'axios';

function Profile(): ReturnType<React.FC> {
  const { userId } = useParams();
  const [userData, setUserData] = React.useState<User | null>(null);

  React.useEffect(() => {
    console.log(userId);
    axiosAuthInstToSv.get(`/user/${userId}`).then(res => {
      console.log(res.data);
      setUserData(res.data as User);
    }).catch(err => {
      console.error(err);
      alert('ERROR')
    })
  }, [userId])

  const togglePaused = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axiosAuthInstToSv.patch('/user/toggle-paused').then(res => {
      if (res.status === HttpStatusCode.Ok) {
        return window.location.reload();
      }
      alert('ERROR!');
    }).catch(err => {
      console.error(err);
      alert('ERROR');
    })
  }

  return !userData ? null : (
    <>
      <div className="card">
        <img src={DEFAULT_PROFILE_PIC} alt={''} />
        <div className="card-body">
          <h2 style={{ color: `${userData?.paused ? 'red' : 'green'}` }}>
            {userData?.name}
          </h2>
          <p>{userData?.profile?.xp} years xp</p>
          <p>industry: {userData?.profile?.indType}</p>
          <p>role: {ROLE_MAPPING.get(userData?.rolePriority as number)?.toUpperCase()}</p>
        </div>
      </div>
      <div>
        <Collapsible trigger={'Frontend Profile'} triggerDisabled={userData?.profile?.feProfile == null}>
          <FeProfile feProfile={userData?.profile?.feProfile as FeProfileI}/>
        </Collapsible>
        <Collapsible trigger={'Backend Profile'} triggerDisabled={userData?.profile?.beProfile == null}>
          <BeProfile beProfile={userData?.profile?.beProfile as BeProfileI} />
        </Collapsible>
        <Collapsible trigger={'Soft Skills Profile'} triggerDisabled={userData?.profile?.ssProfile == null}>
          <SSProfile ssProfile={userData?.profile?.ssProfile as SSProfileI} />
        </Collapsible>
      </div>
      <div>
        <Link to={`/edit-profile/${userId}`} target='_blank'>Edit/Add profile</Link>
      </div>
      <div>
        {userData?.rolePriority === 2 && <button onClick={togglePaused}>Toggle paused!</button> }
      </div>
    </>
  );
}

export default Profile;