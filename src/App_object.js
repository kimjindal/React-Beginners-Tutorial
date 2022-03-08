import React from 'react';
import Star from './components/Star';

export default function App() {
  const [contact, setContect] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsyourname@example.com',
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png';

  function toggleFavorite() {
    setContect((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img className="card--image" src="images/user.png" alt="user" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
