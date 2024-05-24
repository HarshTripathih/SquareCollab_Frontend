import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';

const ScholarForm = () => {
  const { register, handleSubmit, control, reset } = useForm();
  const { fields: educationFields, append: addEducation } = useFieldArray({
    control,
    name: 'education',
  });
  const { fields: publicationFields, append: addPublication } = useFieldArray({
    control,
    name: 'publications',
  });
  const { fields: experienceFields, append: addExperience } = useFieldArray({
    control,
    name: 'professionalExperience',
  });
  const { fields: honorsFields, append: addHonor } = useFieldArray({
    control,
    name: 'honorsAndAwards',
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/scholars', data);
      console.log(response.data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register('name', { required: true })} />
      </div>
      <div>
        <label>Affiliation:</label>
        <input {...register('affiliation', { required: true })} />
      </div>
      <div>
        <label>Title:</label>
        <input {...register('title', { required: true })} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" {...register('contact.email', { required: true })} />
      </div>
      <div>
        <label>Phone:</label>
        <input {...register('contact.phone', { required: true })} />
      </div>
      <div>
        <label>Website:</label>
        <input {...register('contact.website')} />
      </div>
      <div>
        <label>Research Interests:</label>
        <input {...register('researchInterests', { required: true })} />
      </div>
      <div>
        <h3>Education</h3>
        {educationFields.map((field, index) => (
          <div key={field.id}>
            <label>Degree:</label>
            <input {...register(`education.${index}.degree`)} />
            <label>Institution:</label>
            <input {...register(`education.${index}.institution`)} />
            <label>Graduation Year:</label>
            <input type="number" {...register(`education.${index}.graduationYear`)} />
          </div>
        ))}
        <button type="button" onClick={() => addEducation({})}>Add Education</button>
      </div>
      <div>
        <h3>Publications</h3>
        {publicationFields.map((field, index) => (
          <div key={field.id}>
            <label>Title:</label>
            <input {...register(`publications.${index}.title`, { required: true })} />
            <label>Type:</label>
            <input {...register(`publications.${index}.type`, { required: true })} />
            <label>Year:</label>
            <input type="number" {...register(`publications.${index}.year`, { required: true })} />
          </div>
        ))}
        <button type="button" onClick={() => addPublication({})}>Add Publication</button>
      </div>
      <div>
        <h3>Professional Experience</h3>
        {experienceFields.map((field, index) => (
          <div key={field.id}>
            <label>Position:</label>
            <input {...register(`professionalExperience.${index}.position`)} />
            <label>Organization:</label>
            <input {...register(`professionalExperience.${index}.organization`)} />
            <label>Start Date:</label>
            <input type="date" {...register(`professionalExperience.${index}.startDate`)} />
            <label>End Date:</label>
            <input type="date" {...register(`professionalExperience.${index}.endDate`)} />
          </div>
        ))}
        <button type="button" onClick={() => addExperience({})}>Add Experience</button>
      </div>
      <div>
        <h3>Honors and Awards</h3>
        {honorsFields.map((field, index) => (
          <div key={field.id}>
            <label>Title:</label>
            <input {...register(`honorsAndAwards.${index}.title`)} />
            <label>Year:</label>
            <input type="number" {...register(`honorsAndAwards.${index}.year`)} />
          </div>
        ))}
        <button type="button" onClick={() => addHonor({})}>Add Honor/Award</button>
      </div>
      <div>
        <label>Professional Memberships:</label>
        <input {...register('professionalMemberships')} />
      </div>
      <div>
        <label>Skills:</label>
        <input {...register('skills')} />
      </div>
      <div>
        <label>LinkedIn:</label>
        <input {...register('socialMediaProfiles.linkedIn')} />
      </div>
      <div>
        <label>ResearchGate:</label>
        <input {...register('socialMediaProfiles.researchGate')} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ScholarForm;
