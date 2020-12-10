import React, { Fragment } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import municipios from './municipios';

// const latitude = -3.71664;
// const longitude = -38.5423;

const Profile = ({ user }) => (
  <Fragment>
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={user.avatar_url}
            alt="Card"
          />
          <ul className="list-group list-group-flush">
          <li className="list-group-item">
              Nome:{" "}
              <span className="badge float-right">
                {user.name}
              </span>
            </li>
            <li className="list-group-item">
              Bio:{" "}
              <span className="badge float-right">
                {user.bio}
              </span>
            </li>
          </ul>
          <div className="card-body">
            <a
              href={user.html_url}
              className="btn btn-info btn-block">
              Perfil
            </a>
          </div>
          <div className="card">
            {/* <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={latitude}>
                <Popup>
                  User
                </Popup>
              </Marker>
            </MapContainer> */}
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Profile;
