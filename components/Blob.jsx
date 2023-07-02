import '../styles/blobs.css';

export default function Blobs({ children }) {
  return (
    <>
      <div className="blob-c">
        <div className="shape-blob" />
        <div className="shape-blob one" />
        <div className="shape-blob two" />
        <div className="shape-blob three" />
        <div className="shape-blob four" />
        <div className="shape-blob five" />
        <div className="shape-blob six" />
      </div>
      {children}
    </>
  );
}
