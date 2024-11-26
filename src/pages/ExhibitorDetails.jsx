import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ExhibitorDetails.css';

const exhibitorsDetails = {
    1: {
      name: 'Cambridge University Press',
      category: 'Academic Publishers',
      boothNumber: 'A101',
      website: 'https://www.cambridge.org/',
      books: ['The Cambridge Handbook', 'English Grammar Today', 'Advanced Learners Dictionary'],
    },
    2: {
      name: 'Association of Taipei Publishers',
      category: 'Cultural Organizations',
      boothNumber: 'B203',
      website: 'https://www.taipeipublishers.org/',
      books: ['Taiwanese Literature', 'History of Taipei', 'Cultural Stories'],
    },
    3: {
      name: 'Argentina Consulate General',
      category: 'Government Representation',
      boothNumber: 'C305',
      website: 'https://www.argentinaconsulate.org/',
      books: ['Argentine Tango', 'History of Argentina', 'Cultural Cuisine'],
    },
    4: {
      name: 'Hong Kong University Press',
      category: 'University Publishers',
      boothNumber: 'D407',
      website: 'https://www.hkupress.org/',
      books: ['Hong Kong Politics', 'Cultural Studies', 'History of Hong Kong'],
    },
    5: {
      name: 'Oxford University Press',
      category: 'Academic Publishers',
      boothNumber: 'A102',
      website: 'https://www.oup.com/',
      books: ['Oxford English Dictionary', 'Oxford History of the World', 'Oxford Guide to Grammar'],
    },
    6: {
      name: 'Harvard University Press',
      category: 'University Publishers',
      boothNumber: 'A103',
      website: 'https://www.hup.harvard.edu/',
      books: ['Harvard Classics', 'The Innovators', 'Capital in the Twenty-First Century'],
    },
    7: {
      name: 'Scholastic Inc.',
      category: 'Children’s Publishers',
      boothNumber: 'B204',
      website: 'https://www.scholastic.com/',
      books: ['Harry Potter Series', 'Goosebumps', 'Magic School Bus'],
    },
    8: {
      name: 'Penguin Random House',
      category: 'General Publishers',
      boothNumber: 'B205',
      website: 'https://www.penguinrandomhouse.com/',
      books: ['To Kill a Mockingbird', '1984', 'The Great Gatsby'],
    },
    9: {
      name: 'Springer Nature',
      category: 'Scientific Publishers',
      boothNumber: 'C306',
      website: 'https://www.springernature.com/',
      books: ['Scientific Journals', 'Nature Magazine', 'Advanced Physics'],
    },
    10: {
      name: 'Taschen',
      category: 'Art and Design Publishers',
      boothNumber: 'D408',
      website: 'https://www.taschen.com/',
      books: ['The History of Art', 'Architectural Wonders', 'Fashion Design Books'],
    },
    11: {
      name: 'McGraw Hill',
      category: 'Educational Publishers',
      boothNumber: 'A104',
      website: 'https://www.mheducation.com/',
      books: ['Principles of Economics', 'Engineering Mathematics', 'Biology Essentials'],
    },
    12: {
      name: 'Bloomsbury Publishing',
      category: 'Literature Publishers',
      boothNumber: 'B206',
      website: 'https://www.bloomsbury.com/',
      books: ['Harry Potter Series', 'The Priory of the Orange Tree', 'The Book Thief'],
    },
    13: {
      name: 'Disney Publishing Worldwide',
      category: 'Children’s Publishers',
      boothNumber: 'B207',
      website: 'https://www.disney.com/',
      books: ['Disney Princess Stories', 'Marvel Adventures', 'Star Wars Adventures'],
    },
    14: {
      name: 'Simon & Schuster',
      category: 'General Publishers',
      boothNumber: 'C307',
      website: 'https://www.simonandschuster.com/',
      books: ['Steve Jobs', 'Born a Crime', 'Educated'],
    },
    15: {
      name: 'MIT Press',
      category: 'Scientific Publishers',
      boothNumber: 'D409',
      website: 'https://mitpress.mit.edu/',
      books: ['The Algorithm Design Manual', 'Artificial Intelligence', 'Design Thinking'],
    },
    16: {
      name: 'Marvel Comics',
      category: 'Comics and Entertainment',
      boothNumber: 'E501',
      website: 'https://www.marvel.com/',
      books: ['The Avengers', 'Spider-Man', 'X-Men'],
    },
    17: {
      name: 'DC Comics',
      category: 'Comics and Entertainment',
      boothNumber: 'E502',
      website: 'https://www.dccomics.com/',
      books: ['Batman', 'Superman', 'Justice League'],
    },
    18: {
      name: 'Pearson Education',
      category: 'Educational Publishers',
      boothNumber: 'A105',
      website: 'https://www.pearson.com/',
      books: ['Mathematics for Engineers', 'Statistics Fundamentals', 'Chemistry Basics'],
    },
    19: {
      name: 'Hachette Book Group',
      category: 'General Publishers',
      boothNumber: 'C308',
      website: 'https://www.hachettebookgroup.com/',
      books: ['The Silent Patient', 'Where the Crawdads Sing', 'Circe'],
    },
    20: {
      name: 'Random House Kids',
      category: 'Children’s Publishers',
      boothNumber: 'B208',
      website: 'https://www.randomhousekids.com/',
      books: ['The Little Engine That Could', 'Dr. Seuss Classics', 'Charlotte’s Web'],
    },
    21: {
        name: 'Wiley',
        category: 'Scientific and Educational Publishers',
        boothNumber: 'I101',
        website: 'https://www.wiley.com/',
        books: ['Organic Chemistry', 'Artificial Intelligence', 'Advanced Mathematics'],
      },
      22: {
        name: 'Cengage Learning',
        category: 'Educational Publishers',
        boothNumber: 'I202',
        website: 'https://www.cengage.com/',
        books: ['Principles of Economics', 'Exploring Psychology', 'World History Studies'],
      },
      23: {
        name: 'Elsevier',
        category: 'Medical and Scientific Publishers',
        boothNumber: 'J101',
        website: 'https://www.elsevier.com/',
        books: ['Gray\'s Anatomy', 'Clinical Medicine', 'Data Science Essentials'],
      },
      24: {
        name: 'Thames & Hudson',
        category: 'Art and Design Publishers',
        boothNumber: 'J202',
        website: 'https://www.thamesandhudson.com/',
        books: ['The Art Book', 'World Architecture', 'Contemporary Design'],
      },
      25: {
        name: 'Faber & Faber',
        category: 'Fiction and Poetry Publishers',
        boothNumber: 'K101',
        website: 'https://www.faber.co.uk/',
        books: ['The Waste Land', 'Lord of the Flies', 'Collected Poems of T.S. Eliot'],
      },
      26: {
        name: 'Abrams Books',
        category: 'Art, Photography, and Comics',
        boothNumber: 'K202',
        website: 'https://www.abramsbooks.com/',
        books: ['The Art of Star Wars', 'Diary of a Wimpy Kid', 'Photography Masters'],
      },
      27: {
        name: 'Harlequin Enterprises',
        category: 'Romance and Fiction Publishers',
        boothNumber: 'L101',
        website: 'https://www.harlequin.com/',
        books: ['A Family Affair', 'The Billionaire\'s Proposal', 'Summer Love'],
      },
      28: {
        name: 'Macmillan Publishers',
        category: 'General Publishers',
        boothNumber: 'L202',
        website: 'https://us.macmillan.com/',
        books: ['The Book Thief', 'The Kite Runner', 'The Night Watchman'],
      },
      29: {
        name: 'Kodansha',
        category: 'Manga and Japanese Literature',
        boothNumber: 'M101',
        website: 'https://www.kodansha.us/',
        books: ['Attack on Titan', 'Akira', 'Sailor Moon'],
      },
      30: {
        name: 'Shueisha',
        category: 'Manga and Japanese Literature',
        boothNumber: 'M202',
        website: 'https://www.shueisha.co.jp/',
        books: ['One Piece', 'Naruto', 'Dragon Ball Z'],
      },
      31: {
        name: 'Chronicle Books',
        category: 'Lifestyle and Art Publishers',
        boothNumber: 'N101',
        website: 'https://www.chroniclebooks.com/',
        books: ['The Art of Pixar', 'The Secret Lives of Color', 'Creativity in Design'],
      },
      32: {
        name: 'Andrews McMeel Publishing',
        category: 'Comics and Humor Publishers',
        boothNumber: 'N202',
        website: 'https://www.andrewsmcmeel.com/',
        books: ['Calvin and Hobbes', 'Dilbert', 'The Far Side'],
      },
      33: {
        name: 'Pan Macmillan',
        category: 'Fiction and Non-Fiction Publishers',
        boothNumber: 'O101',
        website: 'https://www.panmacmillan.com/',
        books: ['The Song of Achilles', 'Circe', 'The Light We Lost'],
      },
      34: {
        name: 'Tor Books',
        category: 'Science Fiction and Fantasy Publishers',
        boothNumber: 'O202',
        website: 'https://www.tor.com/',
        books: ['The Wheel of Time', 'Mistborn', 'Dune'],
      },
      35: {
        name: 'Hay House',
        category: 'Self-Help and Spirituality Publishers',
        boothNumber: 'P101',
        website: 'https://www.hayhouse.com/',
        books: ['The Power of Now', 'You Can Heal Your Life', 'The Four Agreements'],
      },
    };
  

const ExhibitorDetails = () => {
  const { id } = useParams();
  const exhibitor = exhibitorsDetails[id];

  if (!exhibitor) {
    return <p>Exhibitor not found!</p>;
  }

  return (
    <div className="exhibitor-details-container">
      <h1 className="exhibitor-details-title">{exhibitor.name}</h1>
      <div className="exhibitor-details-info">
        <p>
          <strong>Category:</strong> {exhibitor.category}
        </p>
        <p>
          <strong>Booth Number:</strong> {exhibitor.boothNumber}
        </p>
        <p>
          <strong>Website:</strong> <a href={exhibitor.website} target="_blank" rel="noreferrer">{exhibitor.website}</a>
        </p>
      </div>
      <div className="exhibitor-details-books">
        <strong>Recommended Books:</strong>
        <ul>
          {exhibitor.books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
      <Link to="/visitor/exhibitor-list" className="exhibitor-details-back">Back to Exhibitor List</Link>
    </div>
  );
};

export default ExhibitorDetails;
