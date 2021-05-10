export const faqAnchorRegexp = /[.,\/#!$%\^&\*;:{}=\-_`()?\'\"]/g;

export const getComponents = (meta, q) => {
  let category, question, answer, questionId;
  meta.faq.find(_category => {
    _category.questions.find(_question => {
      const Question = _question[0];
      const _questionId = Question.replace(faqAnchorRegexp, "")
        .trim()
        .split(" ")
        .join("_");
      if (_questionId === q) {
        category = _category.categoryName;
        question = Question;
        answer = _question[1];
        questionId = _questionId;
      }
    });
  });
  return [category, question, answer, questionId];
};

export const getPaths = meta => {
  const ret = meta.faq.reduce(
    (prev, current) => {
      current.questions.forEach(q => {
        const id = q[0]
          .replace(faqAnchorRegexp, "")
          .trim()
          .split(" ")
          .join("_");
        prev.paths.push({ params: { q: id } });
      });
      return prev;
    },
    { paths: [], fallback: false }
  );
  return ret;
};
