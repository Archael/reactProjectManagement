import noProjectImage from '../assets/no-projects.png';
import Button from './Button';
export default function NoProject() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project to get started, or start a new one
      </p>
      <p className="mt-8">
        <Button>+ Add project</Button>
      </p>
    </div>
  );
}